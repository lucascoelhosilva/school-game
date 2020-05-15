package com.coelho.apischoolgame.domain.answer;

import com.coelho.apischoolgame.domain.answer.repository.AnswerJpaRepository;
import com.coelho.apischoolgame.domain.question.Question;
import com.coelho.apischoolgame.domain.question.QuestionService;
import com.coelho.apischoolgame.exception.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

import static java.util.Objects.nonNull;

@Service
@Slf4j
class AnswerServiceImpl implements AnswerService {

    private final AnswerJpaRepository repository;
    private final QuestionService questionService;

    public AnswerServiceImpl(AnswerJpaRepository repository, QuestionService questionService) {
        this.repository = repository;
        this.questionService = questionService;
    }

    @Override
    public void create(Long questionId, Answer answer) {
        log.info("Creating {}", answer);

        Question question = questionService.getById(questionId);
        if (nonNull(question)) {
            answer.setQuestion(question);
            repository.save(answer);
        } else {
            throw new NotFoundException("Question not found");
        }
    }

    @Override
    public Collection<Answer> getAll(Long questionId) {
        log.info("Getting Answer");
        return repository.findByQuestion(Question.builder().id(questionId).build());
    }

    @Override
    public Answer getById(Long id) {
        log.info("Getting Answer=[{}]", id);

        Optional<Answer> answer = repository.findById(id);

        if(answer.isPresent())
            return answer.get();

        throw new NotFoundException("Answer not found");
    }

    @Override
    public void deleteById(Long id) {
        log.info("Deleting Answer=[{}]", id);
        repository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        log.info("Deleting Answer");
        repository.deleteAll();
    }
}

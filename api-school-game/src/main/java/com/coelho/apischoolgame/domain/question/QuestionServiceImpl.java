package com.coelho.apischoolgame.domain.question;

import com.coelho.apischoolgame.domain.question.repository.QuestionJpaRepository;
import com.coelho.apischoolgame.domain.topics.Topic;
import com.coelho.apischoolgame.domain.topics.TopicService;
import com.coelho.apischoolgame.exception.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

import static java.util.Objects.nonNull;

@Service
@Slf4j
class QuestionServiceImpl implements QuestionService {

    private final QuestionJpaRepository repository;
    private final TopicService topicService;

    public QuestionServiceImpl(QuestionJpaRepository repository, TopicService topicService) {
        this.repository = repository;
        this.topicService = topicService;
    }

    @Override
    public void create(Long topicId, Question question) {
        log.info("Creating {}", question);

        Topic topic = topicService.getById(topicId);
        if (nonNull(topic)) {
           question.setTopic(topic);
            repository.save(question);
        } else {
            throw new NotFoundException("Topic not found");
        }
    }

    @Override
    public Collection<Question> getAll() {
        log.info("Getting [{}] Answer", this.repository.count());
        return repository.findAll();
    }

    @Override
    public Question getById(Long id) {
        log.info("Getting Question=[{}]", id);

        Optional<Question> question = repository.findById(id);

        if(question.isPresent())
            return question.get();

        throw new NotFoundException("Question not found");
    }

    @Override
    public void deleteById(Long id) {
        log.info("Deleting Question=[{}]", id);
        repository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        log.info("Deleting Question");
        repository.deleteAll();
    }
}

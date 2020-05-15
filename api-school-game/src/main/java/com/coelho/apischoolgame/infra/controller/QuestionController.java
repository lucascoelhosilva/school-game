package com.coelho.apischoolgame.infra.controller;

import com.coelho.apischoolgame.domain.answer.AnswerService;
import com.coelho.apischoolgame.domain.question.QuestionService;
import com.coelho.apischoolgame.infra.controller.dtos.AnswerDTO;
import com.coelho.apischoolgame.infra.controller.dtos.QuestionDTO;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/topics/{topicId}/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final QuestionService service;
    private final AnswerService answerService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void post(@PathVariable Long topicId, @Validated @RequestBody QuestionDTO questionDTO) {
        service.create(topicId, questionDTO.toModel());
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<QuestionDTO> get(@PathVariable Long topicId) {
        val questions = service.getAll(topicId);
        return questions.stream()
                .map(question -> QuestionDTO.builder()
                        .id(question.getId())
                        .name(question.getQuestionName())
                        .topicId(question.getTopic().getId())
                        .answers(
                                answerService.getAll(question.getId()).stream()
                                        .map(answer -> AnswerDTO.builder().id(answer.getId()).name(answer.getAnswerName()).questionId(answer.getQuestion().getId()).build())
                                        .collect(Collectors.toSet())
                        )
                        .build()
                ).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public QuestionDTO getOne(@PathVariable Long id) {
        val question = service.getById(id);

        return QuestionDTO.builder()
                .id(question.getId())
                .name(question.getQuestionName())
                .topicId(question.getTopic().getId())
                .build();
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteOne(@PathVariable Long id) {
        service.deleteById(id);
    }

    @DeleteMapping
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete() {
        service.deleteAll();
    }
}

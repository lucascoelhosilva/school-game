package com.coelho.apischoolgame.infra.controller;

import com.coelho.apischoolgame.domain.answer.AnswerService;
import com.coelho.apischoolgame.infra.controller.dtos.AnswerDTO;
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
@RequestMapping("/api/v1/answers")
@RequiredArgsConstructor
public class AnswerController {

    private final AnswerService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void post(@Validated @RequestBody AnswerDTO answerDTO) {
        service.create(answerDTO.getQuestionId(), answerDTO.toModel());
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<AnswerDTO> get() {
        val answers = service.getAll();
        return answers.stream()
                .map(answer -> AnswerDTO.builder()
                        .id(answer.getId())
                        .name(answer.getAnswerName())
                        .questionId(answer.getQuestion().getId())
                        .correct(answer.getCorrect())
                        .build()
                ).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public AnswerDTO getOne(@PathVariable Long id) {
        val answer = service.getById(id);

        return AnswerDTO.builder()
            .id(answer.getId())
            .name(answer.getAnswerName())
            .questionId(answer.getQuestion().getId())
            .correct(answer.getCorrect())
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

package com.coelho.apischoolgame.infra.controller.dtos;

import com.coelho.apischoolgame.domain.answer.Answer;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class AnswerDTO {

    private Long id;

    private String name;

    private Long questionId;

    private Boolean correct;

    public Answer toModel() {
        return Answer.builder()
                .answerName(getName())
                .correct(getCorrect())
                .build();
    }
}

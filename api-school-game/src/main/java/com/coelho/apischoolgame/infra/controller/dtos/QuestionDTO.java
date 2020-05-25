package com.coelho.apischoolgame.infra.controller.dtos;

import com.coelho.apischoolgame.domain.question.Question;
import com.coelho.apischoolgame.domain.topics.Topic;
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
public class QuestionDTO {

    private Long id;

    private String name;

    private Long topicId;

    public Question toModel() {
        return Question.builder()
            .questionName(getName())
            .topic(Topic.builder().id(getTopicId()).build())
            .build();
    }
}

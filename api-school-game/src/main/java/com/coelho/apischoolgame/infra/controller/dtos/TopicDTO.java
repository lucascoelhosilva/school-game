package com.coelho.apischoolgame.infra.controller.dtos;

import com.coelho.apischoolgame.domain.topics.Topic;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class TopicDTO {

    private Long id;

    private String name;

    private Long subjectId;

    public Topic toModel() {
        return Topic.builder()
                .topicName(getName())
                .build();
    }
}

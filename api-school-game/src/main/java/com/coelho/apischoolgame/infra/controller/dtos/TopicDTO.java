package com.coelho.apischoolgame.infra.controller.dtos;

import com.coelho.apischoolgame.domain.subject.Subject;
import com.coelho.apischoolgame.domain.topics.Topic;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

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
            .subject(Subject.builder().id(getSubjectId()).build())
            .build();
    }
}

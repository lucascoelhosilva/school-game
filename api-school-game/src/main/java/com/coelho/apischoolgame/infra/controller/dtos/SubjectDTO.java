package com.coelho.apischoolgame.infra.controller.dtos;

import com.coelho.apischoolgame.domain.subject.Subject;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SubjectDTO {

    private Long id;

    private String name;

    public Subject toModel() {
        return Subject.builder()
                .subjectName(getName())
                .build();
    }

}

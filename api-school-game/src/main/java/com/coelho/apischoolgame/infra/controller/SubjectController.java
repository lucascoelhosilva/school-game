package com.coelho.apischoolgame.infra.controller;

import com.coelho.apischoolgame.domain.subject.SubjectService;
import com.coelho.apischoolgame.infra.controller.dtos.SubjectDTO;
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
@RequestMapping("/api/v1/subjects")
@RequiredArgsConstructor
public class SubjectController {

    private final SubjectService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void post(@Validated @RequestBody SubjectDTO subjectDTO) {
        service.create(subjectDTO.toModel());
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<SubjectDTO> get() {
        val subjects = service.getAll();
        return subjects.stream()
                .map(subject -> SubjectDTO.builder()
                        .id(subject.getId())
                        .name(subject.getSubjectName())
                        .build()
                ).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public SubjectDTO getOne(@PathVariable Long id) {
        val subject = service.getById(id);

        return SubjectDTO.builder()
                .id(subject.getId())
                .name(subject.getSubjectName())
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

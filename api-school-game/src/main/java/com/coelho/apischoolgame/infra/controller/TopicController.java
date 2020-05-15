package com.coelho.apischoolgame.infra.controller;

import com.coelho.apischoolgame.domain.topics.TopicService;
import com.coelho.apischoolgame.infra.controller.dtos.TopicDTO;
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
@RequestMapping("/api/v1/subjects/{subjectId}/topics")
@RequiredArgsConstructor
public class TopicController {

    private final TopicService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void post(@PathVariable Long subjectId, @Validated @RequestBody TopicDTO topicDTO) {
        service.create(subjectId, topicDTO.toModel());
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Collection<TopicDTO> get(@PathVariable Long subjectId) {
        val topics = service.getAll(subjectId);
        return topics.stream()
                .map(topic -> TopicDTO.builder()
                        .id(topic.getId())
                        .name(topic.getTopicName())
                        .subjectId(topic.getSubject().getId())
                        .build()
                ).collect(Collectors.toList());
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public TopicDTO getOne(@PathVariable Long id) {
        val topic = service.getById(id);

        return TopicDTO.builder()
                .id(topic.getId())
                .name(topic.getTopicName())
                .subjectId(topic.getSubject().getId())
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

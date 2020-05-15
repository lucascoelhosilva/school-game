package com.coelho.apischoolgame.domain.topics;

import java.util.Collection;

public interface TopicService {

    void create(Long subjectId, Topic topic);

    Collection<Topic> getAll(Long subjectId);

    Topic getById(Long id);

    void deleteById(Long id);

    void deleteAll();
}

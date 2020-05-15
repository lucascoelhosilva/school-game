package com.coelho.apischoolgame.domain.topics.repository;

import com.coelho.apischoolgame.domain.topics.Topic;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;

@Repository
@Slf4j
public class TopicRepository {

    // FIXME Após a poc colocar um banco de verdade
    private final HashMap<Long, Topic> data = new HashMap<>();

    public Topic save(@NonNull Topic request) {
        data.put(request.getId(), request);
        return request;
    }

    public Collection<Topic> findAll() {
        return data.values();
    }

    public Topic findById(Long id) {
        return data.get(id);
    }

    public void deleteById(Long id) {
        data.remove(id);
    }

    public void deleteAll() {
        data.clear();
    }
}

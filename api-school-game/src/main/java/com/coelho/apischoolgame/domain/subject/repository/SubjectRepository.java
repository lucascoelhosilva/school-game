package com.coelho.apischoolgame.domain.subject.repository;

import com.coelho.apischoolgame.domain.subject.Subject;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.HashMap;

@Repository
@Slf4j
public class SubjectRepository {

    // FIXME Após a poc colocar um banco de verdade
    private final HashMap<Long, Subject> data = new HashMap<>();

    public Subject save(@NonNull Subject request) {
        data.put(request.getId(), request);
        return request;
    }

    public Collection<Subject> findAll() {
        return data.values();
    }

    public Subject findById(Long id) {
        return data.get(id);
    }

    public void deleteById(Long id) {
        data.remove(id);
    }

    public void deleteAll() {
        data.clear();
    }
}

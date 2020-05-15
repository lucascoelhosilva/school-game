package com.coelho.apischoolgame.domain.subject;

import java.util.Collection;

public interface SubjectService {

    void create(Subject subject);

    Collection<Subject> getAll();

    Subject getById(Long id);

    void deleteById(Long id);

    void deleteAll();
}

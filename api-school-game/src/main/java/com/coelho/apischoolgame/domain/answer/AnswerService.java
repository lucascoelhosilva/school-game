package com.coelho.apischoolgame.domain.answer;

import java.util.Collection;

public interface AnswerService {

    void create(Long questionId, Answer answer);

    Collection<Answer> getAll();

    Answer getById(Long id);

    void deleteById(Long id);

    void deleteAll();
}

package com.coelho.apischoolgame.domain.question;

import java.util.Collection;

public interface QuestionService {

    void create(Long topicId, Question question);

    Collection<Question> getAll();

    Question getById(Long id);

    void deleteById(Long id);

    void deleteAll();
}

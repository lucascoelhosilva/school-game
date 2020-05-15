package com.coelho.apischoolgame.domain.question.repository;

import com.coelho.apischoolgame.domain.question.Question;
import com.coelho.apischoolgame.domain.topics.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface QuestionJpaRepository extends JpaRepository<Question, Long> {

    Collection<Question> findByTopic(Topic topic);
}

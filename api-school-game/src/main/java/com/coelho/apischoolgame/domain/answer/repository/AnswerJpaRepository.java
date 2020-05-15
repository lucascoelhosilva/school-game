package com.coelho.apischoolgame.domain.answer.repository;

import com.coelho.apischoolgame.domain.answer.Answer;
import com.coelho.apischoolgame.domain.question.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface AnswerJpaRepository extends JpaRepository<Answer, Long> {

    Collection<Answer> findByQuestion(Question question);
}

package com.coelho.apischoolgame.domain.topics.repository;

import com.coelho.apischoolgame.domain.subject.Subject;
import com.coelho.apischoolgame.domain.topics.Topic;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;

@Repository
public interface TopicJpaRepository extends JpaRepository<Topic, Long> {

    Collection<Topic> findBySubject(Subject subject);
}

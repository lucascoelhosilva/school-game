package com.coelho.apischoolgame.domain.subject.repository;

import com.coelho.apischoolgame.domain.subject.Subject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectJpaRepository extends JpaRepository<Subject, Long> {

}

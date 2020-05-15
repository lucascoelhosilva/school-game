package com.coelho.apischoolgame.domain.subject;

import com.coelho.apischoolgame.domain.subject.repository.SubjectJpaRepository;
import com.coelho.apischoolgame.exception.NotFoundException;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
@Slf4j
class SubjectServiceImpl implements SubjectService {

    private final SubjectJpaRepository repository;

    public SubjectServiceImpl(SubjectJpaRepository repository) {
        this.repository = repository;
    }

    @Override
    public void create(@NonNull Subject subject) {
        log.info("Creating {}", subject);
        repository.save(subject);
    }

    @Override
    public Collection<Subject> getAll() {
        log.info("Getting subjects");
        return repository.findAll();
    }

    @Override
    public Subject getById(@NonNull Long id) {
        log.info("Getting Subject=[{}]", id);

        Optional<Subject> subject = repository.findById(id);

        if(subject.isPresent())
            return subject.get();

        throw new NotFoundException("Subject not found");
    }

    @Override
    public void deleteById(@NonNull Long id) {
        log.info("Deleting Subject=[{}]", id);
        repository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        log.info("Deleting Subjects");
        repository.deleteAll();
    }
}

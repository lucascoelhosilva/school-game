package com.coelho.apischoolgame.domain.topics;

import com.coelho.apischoolgame.domain.subject.Subject;
import com.coelho.apischoolgame.domain.subject.SubjectService;
import com.coelho.apischoolgame.domain.topics.repository.TopicJpaRepository;
import com.coelho.apischoolgame.exception.NotFoundException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.Collection;
import java.util.Optional;

@Service
@Slf4j
class TopicServiceImpl implements TopicService {

    private final TopicJpaRepository repository;
    private final SubjectService subjectService;

    public TopicServiceImpl(TopicJpaRepository repository, SubjectService subjectService) {
        this.repository = repository;
        this.subjectService = subjectService;
    }

    @Override
    public void create(Long subjectId, Topic topic) {
        log.info("Creating {}", topic);

        Subject subject = subjectService.getById(subjectId);
        topic.setSubject(subject);
        repository.save(topic);
    }

    @Override
    public Collection<Topic> getAll() {
        log.info("Getting [{}] Topics", this.repository.count());
        return repository.findAll();
    }

    @Override
    public Topic getById(Long id) {
        log.info("Getting Topic=[{}]", id);

        Optional<Topic> topic = repository.findById(id);

        if(topic.isPresent())
            return topic.get();

        throw new NotFoundException("Topic is not found");
    }

    @Override
    public void deleteById(Long id) {
        log.info("Deleting Topic=[{}]", id);
        repository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        log.info("Deleting Topics");
        repository.deleteAll();
    }
}

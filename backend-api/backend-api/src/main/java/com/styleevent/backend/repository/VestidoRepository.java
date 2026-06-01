package com.styleevent.backend.repository;

import com.styleevent.backend.model.Vestido;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VestidoRepository extends MongoRepository<Vestido, String> {
}
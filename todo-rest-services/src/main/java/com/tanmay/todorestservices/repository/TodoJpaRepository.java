package com.tanmay.todorestservices.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.tanmay.todorestservices.model.Todo;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long> {

	List<Todo> findByUsername(String username);
}

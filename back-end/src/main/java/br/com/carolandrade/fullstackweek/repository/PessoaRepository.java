package br.com.carolandrade.fullstackweek.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import br.com.carolandrade.fullstackweek.domain.Pessoa;


public interface PessoaRepository extends JpaRepository<Pessoa, Long>{

}

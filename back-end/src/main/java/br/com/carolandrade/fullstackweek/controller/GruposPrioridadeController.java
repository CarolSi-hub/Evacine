package br.com.carolandrade.fullstackweek.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.carolandrade.fullstackweek.domain.GruposPrioridade;
import br.com.carolandrade.fullstackweek.repository.GruposPrioridadeRepository;

@RestController
@RequestMapping("/grupos-prioridade")
public class GruposPrioridadeController {
	
	@Autowired
	private GruposPrioridadeRepository repository;
	
	@GetMapping
	public List <GruposPrioridade> listarTodos(){
		return repository.findAll();
	}
	
	@GetMapping("/{codigo}")
	public GruposPrioridade buscarPeloCodigo(@PathVariable Long codigo) {
		return repository.findById(codigo).orElse(null);
	}
}

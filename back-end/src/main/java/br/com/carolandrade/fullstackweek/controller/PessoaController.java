package br.com.carolandrade.fullstackweek.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.carolandrade.fullstackweek.domain.Pessoa;
import br.com.carolandrade.fullstackweek.repository.PessoaRepository;


@RestController
@RequestMapping("/pessoas")
@CrossOrigin(origins = { "http://localhost:3000"})
public class PessoaController {

	@Autowired
	private PessoaRepository repository;
	
	@GetMapping
	public List <Pessoa> listarTodos(){
		return repository.findAll();
	}
	
	@PostMapping
	public Pessoa cadastrarPessoa (@RequestBody Pessoa pessoa) {
		Pessoa pessoaCadastrada = repository.save(pessoa);
		pessoaCadastrada.setIsVacinada(false);
		return repository.save(pessoaCadastrada);	
	}
	
	@PutMapping("/{codigo}")
	public Pessoa atualizar(@PathVariable("codigo") Long codigo,
			@RequestBody Pessoa pessoa) {
		return repository.findById(codigo).map(record -> {
		record.setCpf(pessoa.getCpf());
		record.setDataNascimento(pessoa.getDataNascimento());
		record.setEmail(pessoa.getEmail());
		record.setNome(pessoa.getNome());
		record.setTelefone(pessoa.getTelefone());
		record.setIdade(pessoa.getIdade());
		return repository.save(record);
		}).orElse(null);
		}	
	
	@GetMapping("/{codigo}")
	public Pessoa buscarPeloCodigo(@PathVariable Long codigo) {
		return repository.findById(codigo).orElse(null);
	}
}

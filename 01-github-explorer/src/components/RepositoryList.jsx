const repositoryName = "unform2";

export function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        <li>
          <strong>{repositoryName}</strong>
          <p>Forms in reactJS</p>
          <a href="">acessar repositório</a>
        </li>
        <li>
          <strong>unform</strong>
          <p>Forms in reactJS</p>
          <a href="">acessar repositório</a>
        </li>
      </ul>
    </section>
  );
}

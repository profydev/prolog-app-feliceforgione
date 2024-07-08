import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import { Error, Spinner } from "@features/ui";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.error(error);
    return (
      <Error refetch={refetch}>
        There was a problem with loading the project data
      </Error>
    );
  }

  return (
    <ul className={styles.list} data-cy="project-list">
      {data?.map((project) => (
        <li key={project.id}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

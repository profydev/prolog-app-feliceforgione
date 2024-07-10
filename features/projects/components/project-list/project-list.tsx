import { ProjectCard } from "../project-card";
import { useGetProjects } from "../../api/use-get-projects";
import styles from "./project-list.module.scss";
import {
  Alert,
  AlertButton,
  AlertIcon,
  AlertMessage,
  ButtonIcon,
  Spinner,
} from "@features/ui";

export function ProjectList() {
  const { data, isLoading, isError, error, refetch } = useGetProjects();

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    console.error(error);
    return (
      <Alert data-cy="projects-error-message">
        <AlertIcon src={"/icons/alert-circle.svg"} />
        <AlertMessage>
          There was a problem with loading the project data
        </AlertMessage>
        <AlertButton onClick={refetch}>
          Try again <ButtonIcon src={"/icons/arrow-right.svg"} />
        </AlertButton>
      </Alert>
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

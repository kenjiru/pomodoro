import { action, observable } from 'mobx';

export const DEFAULT_PROJECT_NAME = 'Default';

export interface Project {
    createDate: number;
    name: string;
    description: string;
    isArchived: boolean;
}

export class ProjectsStore {
    @observable
    private projects: Project[] = [{
        createDate: Date.now(),
        name: DEFAULT_PROJECT_NAME,
        description: 'Default project',
        isArchived: false,
    }, {
        createDate: Date.now(),
        name: 'Second project',
        description: 'Second project',
        isArchived: false,
    }];

    @action
    public getProjects() {
        return this.projects;
    }

    @action
    public addProject(name: string, description: string) {
        this.projects.push({
            createDate: Date.now(),
            name,
            description,
            isArchived: false,
        });
    }
}

export const projectsStore = new ProjectsStore();

import { inject, observer } from 'mobx-react/native';
import { Component } from 'react';
import * as RX from 'reactxp';
import { Project, ProjectsStore } from 'src/model/ProjectsStore';
import { SettingsStore } from 'src/model/SettingsStore';

interface ProjectsPickerProps {
    projectsStore?: ProjectsStore;
    settingsStore?: SettingsStore;
    selectedProject: string;
    onValueChange: (projectName: string) => void;
}

@inject('projectsStore')
@observer
export class ProjectsPicker extends Component<ProjectsPickerProps> {
    public render() {
        const { selectedProject } = this.props;

        return (
            <RX.Picker
                items={this.getActiveProjects()}
                selectedValue={selectedProject}
                onValueChange={this.handleValueChange}
            />
        );
    }

    private handleValueChange = (projectName: string) => {
        this.props.onValueChange(projectName);
    }

    private getActiveProjects() {
        const { projectsStore } = this.props;
        const projects = projectsStore!.getProjects();

        return projects!.map((project: Project): RX.Types.PickerPropsItem => ({
            label: project.name,
            value: project.name,
        }));
    }
}

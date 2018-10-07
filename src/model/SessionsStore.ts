import { action, observable } from 'mobx';

interface WorkSession {
    startTime: number;
    minutes: number;
    project: string;
}

export class SessionsStore {
    @observable
    private sessions: WorkSession[] = [];

    @action
    public getSessions() {
        return this.sessions;
    }

    @action
    public addSession(project: string, minutes: number) {
        this.sessions.push({
            startTime: Date.now(),
            minutes,
            project,
        });
    }
}

export const sessionsStore = new SessionsStore();

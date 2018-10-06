import { action, observable } from 'mobx';

interface WorkSession {
    startTime: number;
    minutes: number;
}

export class SessionsStore {
    @observable
    private sessions: WorkSession[] = [];

    @action
    public getSessions() {
        return this.sessions;
    }

    @action
    public addSession(minutes: number) {
        this.sessions.push({
            startTime: Date.now(),
            minutes,
        });
    }
}

export const sessionsStore = new SessionsStore();

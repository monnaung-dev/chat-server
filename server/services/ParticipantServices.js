import database from '../config/sqlserver.js'


export default {
    getParticipants: async (id) => {
        try {
            const pool = await database.connect();
            const list = await pool.request().query(`select p.* from meeting_participant mp
            inner join participant p on p.id=mp.participant_id
            where mp.meeting_id=${id} and mp.attendance = 1`);
            return list.recordsets;
        } catch (err) {
            console.log(err);
        }
    }
}


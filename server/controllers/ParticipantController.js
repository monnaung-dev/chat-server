import ParticipantService from '../services/ParticipantServices.js';

export default{
    onGetAll:async (req,res) =>{
        try{
            console.log("meetingId"+req.params.id)
            const list=await ParticipantService.getParticipants(req.params.id);
            return res.status(200).json({success:true,list});
        }catch(err){
            return res.status(500).json({ success: false, error: err });
        }
    }
}
const mongoose = require("mongoose");

const conferenceSchema = new mongoose.Schema(
{
    createdby:
    {
        type: mongoose.Types.ObjectId,
        ref: "user",
    },
    metting_link: 
    {
        type: String,
    },

    meeting_description:
    {
        type: String
    }

},
{
        timestamps: true
}
);

module.exports = mongoose.model('conference', onferenceSchema);


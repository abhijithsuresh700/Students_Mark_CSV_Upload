import Student from "../models/studentModel.js";

export const uploadCSV = async (req, res) => {
        try {
            // const students = [];
            // const file = req.file.buffer.toString('utf8');
            // const records = file.split('\n');
            // for (const record of records) {
            //   const [name, age, mark1, mark2, mark3] = record.split(',');
            //   students.push({ name, age, mark1, mark2, mark3 });
            // }
            // await Student.insertMany(students);
            // res.status(201).json({ message: 'CSV data uploaded successfully' });

            const students = [];
            const file = req.file.buffer.toString('utf8');
            const records = file.split('\n');
            console.log(records,"records check")
      
            for (let i = 1; i < records.length -1; i++) {
              const record = records[i];
              const [name, age, mark1, mark2, mark3] = record.split(',');
              students.push({ name, age, mark1, mark2, mark3 });
            }
        
            await Student.insertMany(students);
            res.status(201).json({ message: 'CSV data uploaded successfully' });
        } catch (error) {
            console.log(error,"upload failed")
            res.status(500).json({ error: 'Internal Server Error' });
        }
}

export const getStudentResult = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      res.status(404).json({ message: 'Student not found' });
    } else {
      const totalMarks = student.mark1 + student.mark2 + student.mark3;
      const resultStatus = totalMarks >= 150 ? 'passed' : 'failed';
      res.json({ name: student.name, resultStatus });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}


export const getStudentsByResultStatus = async (req, res) => {
  const resultStatus = req.query.resultStatus;

  try {
    const matchQuery =
      resultStatus === 'passed'
        ? { $expr: { $gte: [{ $sum: ['$mark1', '$mark2', '$mark3'] }, 150] } }
        : { $expr: { $lt: [{ $sum: ['$mark1', '$mark2', '$mark3'] }, 150] } };

    const students = await Student.aggregate([
      {
        $match: matchQuery,
      },
    ]);
    res.json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};






const { Plans, Patients, Surgeries, PatientSurgeries } = require('./models');

const express = require('express');

const app = express();
app.use(express.json()); 

app.get('/plans', async (req, res) => {
  const plans = await Plans.findAll();

  res.json(plans);
})

app.get('/patients', async (req, res) => {
  const patient = await Patients.findAll({
    // trazer o plano do paciente junto
    include: [
      {
        model: Plans, as: 'plans',
      }
    ],
  });

  res.json(patient);
});

app.get('/surgery', async (req, res) => {
  const surgerie = await Surgeries.findAll();

  res.json(surgerie);
});

app.get('/patient-surgerie', async (req, res) => {
  const patientSurgery = await Patients.findAll(
    {
      include: [
        { 
          model: Surgeries,
          as: 'surgeries',
          through: { 
            attributes: [] 
          } 
        }
      ]
    }
  );

  res.json(patientSurgery);
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Port: ${PORT}`);
});
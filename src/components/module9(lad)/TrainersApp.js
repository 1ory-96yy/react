import React, { useState } from 'react';

const TrainersApp = () => {
  const [trainers, setTrainers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addTrainer = (trainer) => {
    const updatedTrainers = [];
    for (let i = 0; i < trainers.length; i++) {
      updatedTrainers.push(trainers[i]);
    }
    updatedTrainers.push(trainer);
    setTrainers(updatedTrainers);
  };

  const deleteTrainer = (id) => {
    const updatedTrainers = [];
    for (let i = 0; i < trainers.length; i++) {
      if (trainers[i].id !== id) {
        updatedTrainers.push(trainers[i]);
      }
    }
    setTrainers(updatedTrainers);
  };

  const updateTrainer = (id, updatedInfo) => {
    const updatedTrainers = [];
    for (let i = 0; i < trainers.length; i++) {
      if (trainers[i].id === id) {
        updatedTrainers.push({ ...trainers[i], ...updatedInfo });
      } else {
        updatedTrainers.push(trainers[i]);
      }
    }
    setTrainers(updatedTrainers);
  };

  const filterTrainers = (trainers, searchTerm) => {
    const result = [];
    for (let i = 0; i < trainers.length; i++) {
      if (
        trainers[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        trainers[i].phone.includes(searchTerm) ||
        trainers[i].specialization.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        result.push(trainers[i]);
      }
    }
    return result;
  };

  const getTrainerWithMostSpecializations = () => {
    const counts = {};
    for (let i = 0; i < trainers.length; i++) {
      if (!counts[trainers[i].name]) {
        counts[trainers[i].name] = 0;
      }
      counts[trainers[i].name]++;
    }

    let maxCount = 0;
    let trainerWithMax = '';
    for (let trainer in counts) {
      if (counts[trainer] > maxCount) {
        maxCount = counts[trainer];
        trainerWithMax = trainer;
      }
    }
    return trainerWithMax;
  };

  const getTrainerWithLeastSpecializations = () => {
    const counts = {};
    for (let i = 0; i < trainers.length; i++) {
      if (!counts[trainers[i].name]) {
        counts[trainers[i].name] = 0;
      }
      counts[trainers[i].name]++;
    }

    let minCount = Infinity;
    let trainerWithMin = '';
    for (let trainer in counts) {
      if (counts[trainer] < minCount) {
        minCount = counts[trainer];
        trainerWithMin = trainer;
      }
    }
    return trainerWithMin;
  };

  const getAverageSpecializations = () => {
    const counts = {};
    for (let i = 0; i < trainers.length; i++) {
      if (!counts[trainers[i].name]) {
        counts[trainers[i].name] = 0;
      }
      counts[trainers[i].name]++;
    }

    let total = 0;
    let totalTrainers = 0;
    for (let trainer in counts) {
      total += counts[trainer];
      totalTrainers++;
    }
    return total / totalTrainers;
  };

  return (
    <div>
      <h1>Фітнес-клуб</h1>

      <div>
        <h2>Пошук тренера</h2>
        <input
          type="text"
          placeholder="Пошук за П.І.Б., телефоном чи спеціалізацією"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul>
          {filterTrainers(trainers, searchTerm).map(trainer => (
            <li key={trainer.id}>
              <strong>{trainer.name}</strong> - {trainer.phone} - {trainer.specialization}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Список тренерів</h2>
        <ul>
          {trainers.map(trainer => (
            <li key={trainer.id}>
              <div>
                <strong>{trainer.name}</strong> ({trainer.specialization})
              </div>
              <div>Телефон: {trainer.phone}</div>
              <button onClick={() => deleteTrainer(trainer.id)}>Видалити</button>
              <button onClick={() => updateTrainer(trainer.id, { specialization: 'Тренер з йоги' })}>
                Змінити спеціалізацію
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Звіти</h2>
        <div>
          <h3>Тренер з найбільшою кількістю спеціалізацій</h3>
          <p>{getTrainerWithMostSpecializations()}</p>
        </div>
        <div>
          <h3>Тренер з найменшою кількістю спеціалізацій</h3>
          <p>{getTrainerWithLeastSpecializations()}</p>
        </div>
        <div>
          <h3>Середня кількість спеціалізацій</h3>
          <p>{getAverageSpecializations()}</p>
        </div>
      </div>

      <form onSubmit={(e) => {
        e.preventDefault();
        addTrainer({
          id: Date.now(),
          name: e.target.name.value,
          phone: e.target.phone.value,
          specialization: e.target.specialization.value,
        });
        e.target.reset();
      }}>
        <input type="text" name="name" placeholder="П.І.Б." required />
        <input type="text" name="phone" placeholder="Контактний телефон" required />
        <select name="specialization">
          <option value="Персональний тренер">Персональний тренер</option>
          <option value="Тренер з йоги">Тренер з йоги</option>
          <option value="Тренер із зумби">Тренер із зумби</option>
          <option value="Тренер з флай-йоги">Тренер з флай-йоги</option>
        </select>
        <button type="submit">Додати тренера</button>
      </form>
    </div>
  );
};

export default TrainersApp;

package com.zenyoga.priyadarshini.service;

import org.springframework.stereotype.Service;

import com.zenyoga.priyadarshini.dto.response.Trainerdto;
import com.zenyoga.priyadarshini.entity.Trainerentity;
import com.zenyoga.priyadarshini.mapper.Trainermapper;
import com.zenyoga.priyadarshini.repository.TrainerRepo;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Trainerservice {

    private final TrainerRepo trainerRepo;

    public Trainerservice(TrainerRepo trainerRepo) {
        this.trainerRepo = trainerRepo;
    }

    public List<Trainerdto> getAllTrainers() {
        List<Trainerentity> trainers = trainerRepo.findAll();
        return trainers.stream()
                .map(Trainermapper::mapToTrainerDto)
                .collect(Collectors.toList());
    }

    public Trainerdto getTrainerByName(String name) {
        Trainerentity trainerEntity = trainerRepo.findByName(name);
        return Trainermapper.mapToTrainerDto(trainerEntity);
    }

    public Trainerdto createTrainer(Trainerdto trainerDto) {
        Trainerentity trainerEntity = Trainermapper.mapToTrainerEntity(trainerDto);
        trainerEntity = trainerRepo.save(trainerEntity);
        return Trainermapper.mapToTrainerDto(trainerEntity);
    }

    public Trainerdto updateTrainerByName(String name, Trainerdto updatedTrainerDto) {
        Trainerentity existingTrainer = trainerRepo.findByName(name);

        if (existingTrainer != null) {
            // Update the fields you want to allow updating
            existingTrainer.setMobile(updatedTrainerDto.getMobile());
            existingTrainer.setAge(updatedTrainerDto.getAge());
            existingTrainer.setSpecialist(updatedTrainerDto.getSpecialist());

            existingTrainer = trainerRepo.save(existingTrainer);
            return Trainermapper.mapToTrainerDto(existingTrainer);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    public void deleteTrainerByName(String name) {
        trainerRepo.deleteByName(name);
    }
}

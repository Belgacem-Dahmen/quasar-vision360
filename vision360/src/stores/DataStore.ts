import { AxiosResponse } from 'axios';
import { defineStore } from 'pinia';
import { api } from 'src/boot/axios';
import { ReseauEnum } from 'src/config/Enums/reseau.enum';

import { ref } from 'vue';
export const useDataStore = defineStore('data', () => {
  const immat = ref('AA123AA');
  const reseau = ref<ReseauEnum>(ReseauEnum.Ateliofid);
  const data = ref({
    full: {},
    predictions: {},
    history: {},
  });

  type Predictions = object;

  const getPredictions = async () => {
    try {
      const url = `api/${reseau.value}/service-external-client/${immat.value}/previsions?lang=en`;

      // Effectuer une requête POST, en passant les données dans 'data' au lieu de 'params'
      const response: AxiosResponse<Predictions> = await api.post(url, {
        immatriculation: immat.value, // Ajout correct dans le body pour une requête POST
      });

      data.value.predictions = response.data; // Assigner uniquement 'response.data' si tu veux les données de la réponse
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getFullData = async () => {
    try {
      const url = `api/${reseau.value}/service-external-client/${immat.value}/import-client?lang=en`;
      const response = await api.post(url, {
        immatriculation: immat.value, // Ajout correct dans le body pour une requête POST
      });
      data.value.full = response.data; // Assigner uniquement 'response.data' si tu veux les données de la réponse
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const getHistory = async () => {
    try {
      const url = `api/${reseau.value}/service-external-client/${immat.value}/history?lang=en`;
      const response = await api.post(url, {
        immatriculation: immat.value,
      });
      data.value.history = response.data;
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  return { immat, reseau, getPredictions, getFullData,getHistory };
});

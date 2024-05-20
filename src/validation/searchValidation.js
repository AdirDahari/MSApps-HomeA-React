import Joi from "joi";
import validation from "./validation";

const categoryRegex =
    /backgrounds|fashion|nature|science|education|feelings|health|people|religion|places|animals|industry|computer|food|sports|transportation|travel|buildings|business|music/;

const searchSchema = Joi.object({
    per_page: Joi.number().min(3).max(200).required(),
    page: Joi.number().min(1).max(500).required(),
    q: Joi.string().pattern(categoryRegex).required(),
});

const validateSearch = (inputsToCheck) =>
    validation(searchSchema, inputsToCheck);

export { validateSearch };

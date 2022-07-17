import default_000__preset_value from "../../data/default_000__preset_value.json";

export default function handler(req, res) {
  res.status(200).json(default_000__preset_value);
}

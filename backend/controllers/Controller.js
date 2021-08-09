const Word = require("../models/WordSchema");
const NodeCache = require( "node-cache" );



const cache = new NodeCache( {stdTTL: 100, checkperiod: 120});

const listWord = async (req, res) => {
  try {
    const listWord = await Word.find({});
    res.json(listWord);
  } catch (err) {
    res.json({ error: `${err}` });
  }
};

const insertWord = async (req, res) => {
  try {
    const word = req.body;
    const insertWord = await Word.create(word);
    res.status(201).json(insertWord);
  } catch (err) {
    res.json({ message: `${err}` });
  }
};

const getWordById = async (req, res) => {
  try {
    const { id } = req.params;
    const word = await Word.findById(id);
    if (!word) return res.status(404).json({ message: "Post Bulunamadi" });
    res.status(200).json(word);
  } catch (error) {
    res.json({ message: `${error}` });
  }
};

const patchWordById = async (req, res) => {
  try {
    const result = await Word.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (result) {
      return res.json(result);
    } else {
      return res.status(404).json({
        mesaj: "Kelime bulunamadi",
      });
    }
  } catch (err) {
    res.json({ message: `${error}` });
  }
};


const deleteWordById = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedWord = await Word.findByIdAndDelete( { _id: id });
        if (deletedWord !== undefined) {
            return res.status(404).json({ message: "Kelime Bulunamadi" });
          }
          res.json({ message: `${id} id li kelimeyi sildiniz` });
    } catch (error) {
        res.json({ message: `${error}` });
    }
};


const getWordNext = async (req, res) => {
    try {

        await Word.countDocuments({}).exec(function (err, countOfWord) {
            let random = Math.floor(Math.random() * countOfWord);

            Word.findOne().skip(random).exec(
                function(err, result) {
                    //console.log(result);
                    cache.set(result.id, result);
                    res.json({"message": result});
                }
            )
        })

        
        
    } catch (error) {
        res.json({ message: `${error}` });
    }
}


const getWordPrevious = async (req, res) => {
    try {
        console.log(getWordNext.resultId);
        res.json({"message": this.getWordNext.result.id})
    } catch (error) {
        
    }
}


module.exports = {
  listWord,
  insertWord,
  getWordById,
  patchWordById,
  deleteWordById,
  getWordNext,
  getWordPrevious
};

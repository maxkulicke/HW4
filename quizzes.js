// EASY
// will be array of easy question objects
var eQuestion1 = { question: "What note is NOT in a C major triad?" };
var eAns1a = { answer: "C", correct: "false", };
var eAns1b = { answer: "E", correct: "false", };
var eAns1c = { answer: "G", correct: "false", };
var eAns1d = { answer: "B", correct: "true", };
var easy1 = [eQuestion1, eAns1a, eAns1b, eAns1c, eAns1d];

var eQuestion2 = { question: "What major key has only 1 '#' in its key signature?" };
var eAns2a = { answer: "F", correct: "false", };
var eAns2b = { answer: "D", correct: "false", };
var eAns2c = { answer: "G", correct: "true", };
var eAns2d = { answer: "A", correct: "false", };
var easy2 = [eQuestion2, eAns2a, eAns2b, eAns2c, eAns2d];

var eQuestion3 = { question: "Which scale degree is lowered by a half-step (semitone) to turn a major triad into a minor triad?" };
var eAns3a = { answer: "iii", correct: "true", };
var eAns3b = { answer: "vii", correct: "false", };
var eAns3c = { answer: "v", correct: "false", };
var eAns3d = { answer: "i", correct: "false", };
var easy3 = [eQuestion3, eAns3a, eAns3b, eAns3c, eAns3d];

var eQuestion4 = { question: "How many notes are in a major scale?" };
var eAns4a = { answer: "8", correct: "false", };
var eAns4b = { answer: "5", correct: "false", };
var eAns4c = { answer: "6", correct: "false", };
var eAns4d = { answer: "7", correct: "true", };
var easy4 = [eQuestion4, eAns4a, eAns4b, eAns4c, eAns4d];

var eQuestion5 = { question: "What kind of note gets the beat in a measure of 4/4 time?" };
var eAns5a = { answer: "Quarter", correct: "true", };
var eAns5b = { answer: "Half", correct: "false", };
var eAns5c = { answer: "Whole", correct: "false", };
var eAns5d = { answer: "Eighth", correct: "false", };
var easy5 = [eQuestion5, eAns5a, eAns5b, eAns5c, eAns5d];

// question 6: what are the three notes of G major?
var eQuestion6 = { question: "What are the three notes of G major?" };
var eAns6a = { answer: "G, Bb, D", correct: "", };
var eAns6b = { answer: "G, B, Db", correct: "false", };
var eAns6c = { answer: "G, B, D", correct: "true", };
var eAns6d = { answer: "G, Bb, DB", correct: "false", };
var easy6 = [eQuestion6, eAns6a, eAns6b, eAns6c, eAns6d];

var easyQuiz = [easy1, easy2, easy3, easy4, easy5, easy6];

// MEDIUM
// will be array of medium question objects
var mQuestion1 = { question: "In the normal diatonic series, which chord has a naturally occurring dominant 7th?" };
var mAns1a = { answer: "I", correct: "false", };
var mAns1b = { answer: "V", correct: "true", };
var mAns1c = { answer: "iii", correct: "false", };
var mAns1d = { answer: "vii", correct: "false", };
var medium1 = [mQuestion1, mAns1a, mAns1b, mAns1c, mAns1d];

var mQuestion2 = { question: "What two internal intervals comprise both the major and minor triads (1st to 3rd and 3rd to 5th)?" };
var mAns2a = { answer: "Minor 3rd, 2nd", correct: "false", };
var mAns2b = { answer: "Major 3rd, 4th", correct: "false", };
var mAns2c = { answer: "Minor 3rd, 5th", correct: "false", };
var mAns2d = { answer: "Major 3rd, Minor 3rd", correct: "true", };
var medium2 = [mQuestion2, mAns2a, mAns2b, mAns2c, mAns2d];

var mQuestion3 = { question: "What scale degree of the major scale is referred to as the relative minor?" };
var mAns3a = { answer: "5", correct: "false", };
var mAns3b = { answer: "6", correct: "true", };
var mAns3c = { answer: "4", correct: "false", };
var mAns3d = { answer: "2", correct: "false", };
var medium3 = [mQuestion3, mAns3a, mAns3b, mAns3c, mAns3d];

var mQuestion4 = { question: "What mode is also known as the major scale?" };
var mAns4a = { answer: "Dorian", correct: "false", };
var mAns4b = { answer: "Locrian", correct: "false", };
var mAns4c = { answer: "Ionian", correct: "true", };
var mAns4d = { answer: "Mixolydian", correct: "false", };
var medium4 = [mQuestion4, mAns4a, mAns4b, mAns4c, mAns4d];

var mQuestion5 = { question: "What is the name of the cadence V7 -> vi?" };
var mAns5a = { answer: "Plagal", correct: "false", };
var mAns5b = { answer: "Major", correct: "false", };
var mAns5c = { answer: "Phrygian", correct: "false", };
var mAns5d = { answer: "Deceptive", correct: "true", };
var medium5 = [mQuestion5, mAns5a, mAns5b, mAns5c, mAns5d];

var mQuestion6 = { question: "What are the 4 notes of Bb maj7?" };
var mAns6a = { answer: "B, D, F, A", correct: "false", };
var mAns6b = { answer: "Bb, D, Fb, A", correct: "false", };
var mAns6c = { answer: "Bb, D, F, Ab", correct: "false", };
var mAns6d = { answer: "Bb, D, F, A", correct: "true", };
var medium6 = [mQuestion6, mAns6a, mAns6b, mAns6c, mAns6d];

var mediumQuiz = [medium1, medium2, medium3, medium4, medium5, medium6];


// HARD
// will be array of hard question objects
var hQuestion1 = { question: "Which scale degree gets raised a half step to make an augmented triad?" }
var hAns1a = { answer: "1", correct: "false", };
var hAns1b = { answer: "3", correct: "false", };
var hAns1c = { answer: "5", correct: "true", };
var hAns1d = { answer: "7", correct: "false", };
var hard1 = [hQuestion1, hAns1a, hAns1b, hAns1c, hAns1d];

var hQuestion2 = { question: "An instance of a dominant V chord in a minor key creates what sort of minor scale?" }
var hAns2a = { answer: "melodic", correct: "false", };
var hAns2b = { answer: "natural", correct: "false", };
var hAns2c = { answer: "dorian", correct: "false", };
var hAns2d = { answer: "harmonic", correct: "true", };
var hard2 = [hQuestion2, hAns2a, hAns2b, hAns2c, hAns2d];

var hQuestion3 = { question: "Which major mode has a naturally occurring tritone interval between the 1st and the 4th scale degree?" }
var hAns3a = { answer: "Ionian", correct: "false", };
var hAns3b = { answer: "Lydian", correct: "true", };
var hAns3c = { answer: "Mixolydian", correct: "false", };
var hAns3d = { answer: "Pentatonic", correct: "false", };
var hard3 = [hQuestion3, hAns3a, hAns3b, hAns3c, hAns3d];

var hQuestion4 = { question: "What type of seventh chord is built upon the major scale degree 7?" }
var hAns4a = { answer: "Major 7", correct: "false", };
var hAns4b = { answer: "Minor 7", correct: "false", };
var hAns4c = { answer: "Minor 7 flat 5", correct: "true", };
var hAns4d = { answer: "Dominant", correct: "false", };
var hard4 = [hQuestion4, hAns4a, hAns4b, hAns4c, hAns4d];

var hQuestion5 = { question: "What kind of chord is made up of stacked minor third intervals?" }
var hAns5a = { answer: "Minor", correct: "false", };
var hAns5b = { answer: "Diminished 7th", correct: "true", };
var hAns5c = { answer: "Major 7", correct: "false", };
var hAns5d = { answer: "Minor 7", correct: "false", };
var hard5 = [hQuestion5, hAns5a, hAns5b, hAns5c, hAns5d];

var hQuestion6 = { question: "In a minor ii V i progression, what variety of 9 would you have on the V chord?" }
var hAns6a = { answer: "Normal", correct: "false", };
var hAns6b = { answer: "Raised", correct: "false", };
var hAns6c = { answer: "Augmented", correct: "false", };
var hAns6d = { answer: "Flat", correct: "true", };
var hard6 = [hQuestion6, hAns6a, hAns6b, hAns6c, hAns6d];

var hardQuiz = [hard1, hard2, hard3, hard4, hard5, hard6];
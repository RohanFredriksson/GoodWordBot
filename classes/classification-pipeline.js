module.exports = {

    ClassificationPipeline: class ClassificationPipeline {

        static task = 'text-classification';
        static model = 'Xenova/twitter-roberta-base-sentiment-latest'; //'Xenova/distilbert-base-uncased-finetuned-sst-2-english';
        static instance = null;

        static async getInstance(progressCallback = null) {
        
            if (this.instance == null) {
                let { pipeline, env } = await import('@huggingface/transformers');
                this.instance = pipeline(this.task, this.model, {progressCallback});
            }
            
            return this.instance;
        }

    }

}
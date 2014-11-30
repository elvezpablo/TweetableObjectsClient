/**
 * Created by paul.rangel on 11/29/14.
 */
module.exports = [ function() {
    this.current = null;
    this.description = null;

    this.setInfo = function(page, description) {
        this.current = page;
        this.description = description;
    };
}];
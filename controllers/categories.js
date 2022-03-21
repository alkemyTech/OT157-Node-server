const { Categories } = require('../models/index');
const express = require('express');



module.exports = {
    async getCategories() {
        const categories = await Categories.findAll();
        if (!categories) return false;
        return categories; 
    }
}







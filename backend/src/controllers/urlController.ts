import { Request, Response } from "express";
const shortid = require('shortid')
import {config} from '../config'
import { Url } from '../models/url.model';

export const shortenUrl =async (req: Request, res : Response) => {

    const { originalUrl } = req.body;
    const randomid : String = shortid.generate();
    const shortUrl = `${config.baseUrl}/${randomid}`;

    try {
        let urlData =await Url.findOne({
            originalUrl
        })
        if (urlData) {
            res.json(urlData);
          } else {
            urlData = new Url({
              originalUrl,
              shortUrl,
              date: new Date()
            });
            await urlData.save();
            res.json(urlData);
          }
    } catch (error) {
        res.status(500).json("Server error");
    }
}

export const redirectUrl = async (req: Request, res: Response) => {

    try {
        const urlData = await Url.findOne({
            shortUrl:`${config.baseUrl}/${req.params.code}`
        })

        if (urlData) {
            return res.redirect(urlData.originalUrl);
          } else {
            return res.status(404).json("No URL found");
          }
    } catch (error) {
        res.status(500).json("Server error");
    }
}
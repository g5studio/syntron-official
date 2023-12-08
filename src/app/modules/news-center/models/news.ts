import {INews} from "../interfaces/i-news";

export class News implements INews {

  private readonly _id: number;
  private readonly _title!: string;
  private readonly _date!: string;
  private readonly _category!: string;
  private readonly _description!: string;
  private readonly _image!: string;
  private readonly _content!: string;

  constructor(data: INews, id: number) {
    const {title, date, category, description, content} = data;
    this._id = id;
    this._title = title;
    this._date = date;
    this._category = category;
    this._description = description;
    this._content = content;
    this._image = data.hasOwnProperty('image') ? data.image! : 'assets/img/news/image_default_s_pc.png';
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get date(): string {
    return this._date;
  }

  get category(): string {
    return this._category;
  }

  get description(): string {
    return this._description;
  }

  get image(): string {
    return this._image;
  }

  get content(): string {
    return this._content;
  }
}

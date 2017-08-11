import {JsonObject, JsonProperty} from "json2typescript";


@JsonObject
export default class GenericModel {
    @JsonProperty("name", String)
    name: string = undefined;
}

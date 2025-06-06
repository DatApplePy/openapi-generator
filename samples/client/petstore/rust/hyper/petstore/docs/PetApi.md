# \PetApi

All URIs are relative to *http://petstore.swagger.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_pet**](PetApi.md#add_pet) | **Post** /pet | Add a new pet to the store
[**delete_pet**](PetApi.md#delete_pet) | **Delete** /pet/{petId} | Deletes a pet
[**find_pets_by_status**](PetApi.md#find_pets_by_status) | **Get** /pet/findByStatus | Finds Pets by status
[**find_pets_by_tags**](PetApi.md#find_pets_by_tags) | **Get** /pet/findByTags | Finds Pets by tags
[**get_pet_by_id**](PetApi.md#get_pet_by_id) | **Get** /pet/{petId} | Find pet by ID
[**pets_explode_post**](PetApi.md#pets_explode_post) | **Post** /pets/explode | List all pets
[**pets_post**](PetApi.md#pets_post) | **Post** /pets | List all pets
[**update_pet**](PetApi.md#update_pet) | **Put** /pet | Update an existing pet
[**update_pet_with_form**](PetApi.md#update_pet_with_form) | **Post** /pet/{petId} | Updates a pet in the store with form data
[**upload_file**](PetApi.md#upload_file) | **Post** /pet/{petId}/uploadImage | uploads an image



## add_pet

> models::Pet add_pet(pet)
Add a new pet to the store

This is the description for the addPet operation

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pet** | [**Pet**](Pet.md) | Pet object that needs to be added to the store | [required] |

### Return type

[**models::Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## delete_pet

> delete_pet(pet_id, api_key)
Deletes a pet



### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pet_id** | **i64** | Pet id to delete | [required] |
**api_key** | Option<**String**> |  |  |

### Return type

 (empty response body)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## find_pets_by_status

> Vec<models::Pet> find_pets_by_status(status, r#type)
Finds Pets by status

Multiple status values can be provided with comma separated strings. This is also a multi-line description to test rust doc comments 

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**status** | [**Vec<String>**](String.md) | Status values that need to be considered for filter | [required] |
**r#type** | Option<[**Vec<String>**](String.md)> | Make sure that Rust keywords like type work as query params |  |

### Return type

[**Vec<models::Pet>**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## find_pets_by_tags

> Vec<models::Pet> find_pets_by_tags(tags)
Finds Pets by tags

Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**tags** | [**Vec<String>**](String.md) | Tags to filter by | [required] |

### Return type

[**Vec<models::Pet>**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## get_pet_by_id

> models::Pet get_pet_by_id(pet_id)
Find pet by ID

Returns a single pet

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pet_id** | **i64** | ID of pet to return | [required] |

### Return type

[**models::Pet**](Pet.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## pets_explode_post

> Vec<models::Pet> pets_explode_post(page_explode)
List all pets

Returns a list of pets

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page_explode** | Option<[**Page**](.md)> | Object containing page `size` and page `number`. |  |

### Return type

[**Vec<models::Pet>**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## pets_post

> Vec<models::Pet> pets_post(page)
List all pets

Returns a list of pets

### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**page** | Option<[**Page**](.md)> | The page number |  |

### Return type

[**Vec<models::Pet>**](Pet.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_pet

> models::Pet update_pet(pet)
Update an existing pet



### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pet** | [**Pet**](Pet.md) | Pet object that needs to be added to the store | [required] |

### Return type

[**models::Pet**](Pet.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: application/json, application/xml
- **Accept**: application/xml, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## update_pet_with_form

> update_pet_with_form(pet_id, name, status)
Updates a pet in the store with form data



### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pet_id** | **i64** | ID of pet that needs to be updated | [required] |
**name** | Option<**String**> | Updated name of the pet |  |
**status** | Option<**String**> | Updated status of the pet |  |

### Return type

 (empty response body)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)


## upload_file

> models::ApiResponse upload_file(pet_id, additional_metadata, file)
uploads an image



### Parameters


Name | Type | Description  | Required | Notes
------------- | ------------- | ------------- | ------------- | -------------
**pet_id** | **i64** | ID of pet to update | [required] |
**additional_metadata** | Option<**String**> | Additional data to pass to server |  |
**file** | Option<**std::path::PathBuf**> | file to upload |  |

### Return type

[**models::ApiResponse**](ApiResponse.md)

### Authorization

[petstore_auth](../README.md#petstore_auth)

### HTTP request headers

- **Content-Type**: multipart/form-data
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

